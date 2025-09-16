import { ConflictException, ForbiddenException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.schema';
import { Model } from 'mongoose';


@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) { }


    async findByOpenId(openId: string) {
        return (await this.userModel.findOne({ openId }).exec())?.toObject()
    }
    async findById(id: string) {
        return (await this.userModel.findById(id).exec())?.toObject()
    }

    async findAll() {
        return await this.userModel.find().exec()
    }

    async create(openId: string, displayName: string) {
        const user = await this.findByOpenId(openId)
        if (user) throw new ConflictException('A user already exists with the given openId')

        const newUser = new this.userModel({ displayName, openId })

        return { ...(await newUser.save()).toObject(), __v: undefined, refreshToken: undefined }
    }

    async updateRefreshToken(userId: string, refreshToken: string) {
        if (await this.userModel.exists({ _id: userId }).exec()) {
            await this.userModel.findByIdAndUpdate(userId, { refreshToken }).exec()
            return
        }
        throw new ForbiddenException('User does not exist')
    }

    async removeRefreshToken(userId: string) {
        if (await this.userModel.exists({ _id: userId }).exec()) {
            await this.userModel.findByIdAndUpdate(userId, { refreshToken: null }).exec()
            return
        }
        throw new ForbiddenException('User does not exist')
    }
}