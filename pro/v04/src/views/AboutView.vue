<template>
  <div>
    <!-- 사용자에게 보여질 내용 -->
    <div class="pose-container">
      <video ref="video" autoplay playsinline muted></video>
      <canvas ref="canvas"></canvas>
      <div class="warning" v-if="showWarning">엉덩이를 더 내려가세요!</div>
    </div>
  </div>
</template>

<script>
import * as tf from '@tensorflow/tfjs'
import * as posenet from '@tensorflow-models/posenet'

export default {
  data() {
    return {
      showWarning: false, // 경고 메시지 표시 여부
      ctx: null // 캔버스 컨텍스트
    }
  },
  async mounted() {
    await this.initPoseNet()
  },
  methods: {
    async initPoseNet() {
      const video = this.$refs.video
      const canvas = this.$refs.canvas
      this.ctx = canvas.getContext('2d') // 캔버스 컨텍스트 설정

      // 캔버스 컨텍스트가 올바르게 설정되었는지 확인
      if (!this.ctx) {
        console.error('캔버스 컨텍스트를 설정할 수 없습니다.')
        return
      }

      // Tensorflow.js 모델 불러오기
      await tf.ready()
      const net = await posenet.load()

      // 비디오 스트림 가져오기
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: true
      })
      video.srcObject = stream

      // 비디오 로드 후 실행
      video.onloadedmetadata = async () => {
        video.play()
        canvas.width = video.width
        canvas.height = video.height

        // 비디오에서 포즈 감지 시작
        this.detectPose(net, video)
      }
    },
    async detectPose(net, video) {
      while (true) {
        const pose = await net.estimateSinglePose(video)

        // 캔버스에 Pose를 그립니다.
        this.drawPose(pose)

        // 엉덩이의 y 좌표를 가져옴
        const hipY = pose.keypoints.find(
          (keypoint) => keypoint.part === 'leftHip'
        ).position.y

        // 무릎의 y 좌표를 가져옴
        const kneeY = pose.keypoints.find(
          (keypoint) => keypoint.part === 'leftKnee'
        ).position.y

        // 엉덩이가 무릎 아래로 내려가지 않으면 경고 표시
        this.showWarning = hipY > kneeY

        await new Promise((resolve) => requestAnimationFrame(resolve))
      }
    },
    drawPose(pose) {
      const ctx = this.ctx

      // ctx가 null이 아닌지 확인
      if (!ctx) {
        console.error('캔버스 컨텍스트가 올바르게 설정되지 않았습니다.')
        return
      }

      // 캔버스를 비워줍니다.
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

      // Pose를 선으로 그립니다.
      this.drawKeypoints(pose.keypoints, ctx)
      this.drawSkeleton(pose.keypoints, posenet.PARTS, ctx)
    },
    drawKeypoints(keypoints, ctx) {
      // 관절 위치에 원을 그립니다.
      for (const keypoint of keypoints) {
        if (keypoint.score > 0.5) {
          const { x, y } = keypoint.position
          ctx.beginPath()
          ctx.arc(x, y, 5, 0, 2 * Math.PI)
          ctx.fillStyle = 'red'
          ctx.fill()
        }
      }
    },
    drawSkeleton(keypoints, ctx) {
      // ctx가 null이 아닌지 확인
      if (!ctx) {
        console.error('캔버스 컨텍스트가 올바르게 설정되지 않았습니다.')
        return
      }

      const PARTS = [
        ['nose', 'leftEye'],
        ['leftEye', 'leftEar'],
        ['nose', 'rightEye'],
        ['rightEye', 'rightEar'],
        ['nose', 'leftShoulder'],
        ['leftShoulder', 'leftElbow'],
        ['leftElbow', 'leftWrist'],
        ['leftShoulder', 'leftHip'],
        ['leftHip', 'leftKnee'],
        ['leftKnee', 'leftAnkle'],
        ['nose', 'rightShoulder'],
        ['rightShoulder', 'rightElbow'],
        ['rightElbow', 'rightWrist'],
        ['rightShoulder', 'rightHip'],
        ['rightHip', 'rightKnee'],
        ['rightKnee', 'rightAnkle']
      ]

      // 관절 간의 선을 그립니다.
      for (const [partFrom, partTo] of PARTS) {
        const fromKeypoint = keypoints.find(
          (keypoint) => keypoint.part === partFrom
        )
        const toKeypoint = keypoints.find(
          (keypoint) => keypoint.part === partTo
        )

        if (
          fromKeypoint &&
          toKeypoint &&
          fromKeypoint.score > 0.5 &&
          toKeypoint.score > 0.5
        ) {
          ctx.beginPath()
          ctx.moveTo(fromKeypoint.position.x, fromKeypoint.position.y)
          ctx.lineTo(toKeypoint.position.x, toKeypoint.position.y)
          ctx.strokeStyle = 'red'
          ctx.lineWidth = 2
          ctx.stroke()
        }
      }
    }
  }
}
</script>

<style scoped>
.pose-container {
  position: relative;
}

video {
  max-width: 100%;
}

canvas {
  position: absolute;
  top: 0;
  left: 0;
}

.warning {
  position: absolute;
  bottom: 10px;
  left: 10px;
  background-color: red;
  color: white;
  padding: 10px;
  border-radius: 5px;
  display: none;
}

.warning.active {
  display: block;
}
</style>
