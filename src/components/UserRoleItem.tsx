import { UserRole } from '@/types'

const UserRoleItem = ({ role }: { role: UserRole }) => {
	if (role === UserRole.ADMIN) return 'Admin'
	if (role === UserRole.CUSTOMER) return 'Customer'
	if (role === UserRole.SUPER_USER) return 'Super User'
}

export default UserRoleItem
