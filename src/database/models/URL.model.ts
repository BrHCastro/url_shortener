import { prop, Typegoose } from '@hasezoey/typegoose'

class URLModel extends Typegoose {
    @prop({ required: true })
    hash: string

    @prop({ required: false })
    title: string

    @prop({ required: true })
    originURL: string

    @prop({ required: true })
    shortURL: string
}

export const URL = new URLModel().getModelForClass(URLModel)
