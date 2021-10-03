import { Request, Response } from 'express'
import shortId from 'shortid'
import { URL } from '../database/models/URL.model'
require('dotenv').config()

class URLController {
  public async shorten (req: Request, res: Response): Promise<void> {
    /**
    * Verificar se a URL já existe
    * Criar hash para essa URL
    * Salvar a URL no banco
    * Retornar a URL salva
  */

    const { originURL, title } = req.body

    const url = await URL.findOne({ originURL })

    if (url) {
      res.status(400).json({ message: 'URL already exists' })
      return
    }

    const hash = shortId.generate()
    const shortURL = title !== undefined ? `${process.env.API_URL}/${title}/${hash}` : `${process.env.API_URL}/${hash}`

    const urlCreated = await URL.create({ hash, originURL, shortURL })

    res.status(200).json(urlCreated)
  }

  public async redirect (req: Request, res: Response): Promise<void> {
    /**
     * Pegar hash da URL
     * Encontrar a URL original pelo hash
     * Redirecionar para URL original a partir do que encontramos no DB
     */

    try {
      const { hash } = req.params

      const url = await URL.findOne({ hash })

      if (url) {
        res.redirect(url.originURL)
        return
      }

      res.status(400).json({ message: 'Invalid URL' })
    } catch (error) {
      console.error(error.message)
      res.status(500).json({ message: "Whoops! There's a problem." })
    }
  }
}

export default new URLController()
