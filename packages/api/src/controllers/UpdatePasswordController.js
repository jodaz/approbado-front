import bcrypt from 'bcrypt'
import { User } from '../models'

export const update = async (req, res) => {
    const { id } = req.user
    const { new_password } = req.body

    const encryptedPassword = await bcrypt.hash(new_password, 10);

    await User.query()
        .updateAndFetchById(id, { password: encryptedPassword })

    return res.status(201).json({
        data: {
            id: id,
            success: true
        }
    })
}
