export const searchFilter = (filterParams, resources) => {
	let filteredArr = resources.filter((item) => {
		const formatMatch =
			!filterParams.filterThree ||
			(item.EXTRA3 &&
				item.EXTRA3.toLowerCase() === filterParams.filterThree.toLowerCase());
		const distMatch =
			!filterParams.filterTwo ||
			(item.EXTRA2 &&
				item.EXTRA2.toLowerCase() === filterParams.filterTwo.toLowerCase());
		const industryMatch =
			!filterParams.filterOne ||
			(item.EXTRA1 &&
				item.EXTRA1.toLowerCase() === filterParams.filterOne.toLowerCase());
		const yearMatch =
			!filterParams.years ||
			item.POST_DATE_FORMAT.slice(-4) === filterParams.years;
		const topicsMatch =
			!filterParams.topics ||
			!item.MAPPING_IDS ||
			filterParams.topics.every((filter) =>
				item.MAPPING_IDS.some((tag) => tag.NAME === filter),
			);
		const textMatch =
			!filterParams.text ||
			item.DISPLAY_NAME.toLowerCase().includes(
				filterParams.text.toLowerCase(),
			) ||
			item.SHORT_DESC.toLowerCase().includes(filterParams.text.toLowerCase());
		const checkID = item.MAPPING_IDS ? true : false;

		return (
			formatMatch &
			distMatch &
			industryMatch &
			topicsMatch &
			checkID &
			yearMatch &
			textMatch
		);
	});

	return filteredArr.sort((a, b) => {
		return new Date(a.POST_DATE_FORMAT).getTime() / 1000 <
			new Date(b.POST_DATE_FORMAT).getTime() / 1000
			? 1
			: -1;
	});
};

export const singleFilter = (filter, resources) => {
	let filteredArr = [];
	resources.forEach((resource) => {
		if (resource.EXTRA1 === filter) {
			filteredArr.push(resource);
		}
		if (resource.EXTRA2 === filter) {
			filteredArr.push(resource);
		}
		if (resource.EXTRA3 === filter) {
			filteredArr.push(resource);
		}
		if (resource.MAPPING_IDS) {
			if (resource.MAPPING_IDS.some((obj) => obj.NAME === filter)) {
				filteredArr.push(resource);
			}
		}
	});
	return filteredArr.sort((a, b) => {
		return new Date(a.POST_DATE_FORMAT).getTime() / 1000 <
			new Date(b.POST_DATE_FORMAT).getTime() / 1000
			? 1
			: -1;
	});
};

/*************NO LONGER IN USE but may be used later **********************
export const filterTrending = (filterParams, resources) => {
	let filteredArr = resources.filter((item) => {
		const formatMatch =
			!filterParams.format ||
			item.EXTRA3.toLowerCase() === filterParams.format.toLowerCase();

		const topicsMatch =
			!filterParams.topics ||
			!item.MAPPING_IDS ||
			filterParams.topics.every((filter) =>
				item.MAPPING_IDS.some((tag) => tag.NAME === filter),
			);
		const checkID = item.MAPPING_IDS ? true : false;
		return formatMatch & topicsMatch & checkID;
	});

	return filteredArr.sort((a, b) => {
		return new Date(a.POST_DATE_FORMAT).getTime() / 1000 <
			new Date(b.POST_DATE_FORMAT).getTime() / 1000
			? 1
			: -1;
	});
};

************************/
