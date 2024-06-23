export const formatPrice = (num: number) => {
	return Math.round(num).toLocaleString('en-US') + ',000' + ' VND'
}
