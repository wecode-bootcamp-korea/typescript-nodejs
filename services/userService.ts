import { User } from '../types'
import userDao from '../models/userDao'

const signUp = async(email: string, password: string): Promise<User> => {

	const user = {
		id: 1,
		email: email,
		age: 33,
	}
	return user
}

export default {
	signUp
}