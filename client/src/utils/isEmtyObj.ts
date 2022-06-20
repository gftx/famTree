function isEmpty(obj: any) {
	for (const key in obj) {
		return false;
	}
	return true;
}

export { isEmpty };
