export const openFilePicker = async (data: string) => {
	var file = await (window as any).showSaveFilePicker({
		types: [
			{
				description: 'Comma Separated Values File',
				accept: { 'text/csv': ['.csv'] },
			},
		],
	});
	let stream = await file.createWritable();
	await stream.write(data);
	await stream.close();
};