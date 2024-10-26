antArtifact identifier="rate-limit-config" type="application/vnd.ant.code" language="typescript" title="Rate Limit Configuration">
import rateLimit from 'express-rate-limit'
import slowDown from 'express-slow-down'

export const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5 // limit each IP to 5 requests per windowMs
})

export const speedLimiter = slowDown({
  windowMs: 15 * 60 * 1000, // 15 minutes
  delayAfter: 3, // allow 3 requests per 15 minutes
  delayMs: 500 // begin adding 500ms of delay per request
})
</antArtifact>
