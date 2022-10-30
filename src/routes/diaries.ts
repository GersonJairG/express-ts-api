import { Router } from 'express'

const router = Router()

router.get('/', (_req, res) => {
  res.send('Fetching all entry diaries...')
})

router.post('/', (_req, res) => {
  res.send('Saving an diary...')
})

export default router
