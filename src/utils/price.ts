export const formatPrice = (num: number) => {
	return num.toLocaleString('en-US') + ',000' + ' VND'
}
