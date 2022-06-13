function isEmpty(obj: any) {
	for (let key in obj) {
		return false;
	}
	return true;
}

export { isEmpty };
