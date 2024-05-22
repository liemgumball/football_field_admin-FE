import UserItem from '@/components/UserItem'

// TODO query data (BE still not implemented)
const RecentSales = () => {
	return (
		<div className="space-y-8">
			<div className="flex items-center">
				<UserItem name="Huyen Pham" email="huyenpham@asnet.com" />
				<div className="ml-auto font-medium">+1,999.00</div>
			</div>
			<div className="flex items-center">
				<UserItem name="Huyen Pham" email="huyenpham@asnet.com" />
				<div className="ml-auto font-medium">+39.00</div>
			</div>
			<div className="flex items-center">
				<UserItem name="Thinh Nguyen" email="thinhnguyen@asnet.com" />
				<div className="ml-auto font-medium">+299.00</div>
			</div>
			<div className="flex items-center">
				<UserItem name="Thanh Liem" email="liem1762001@gmail.com" />
				<div className="ml-auto font-medium">+99.00</div>
			</div>
			<div className="flex items-center">
				<UserItem name="Le Hoang" email="lehoang@gmail.com" />
				<div className="ml-auto font-medium">+39.00</div>
			</div>
		</div>
	)
}

export default RecentSales
