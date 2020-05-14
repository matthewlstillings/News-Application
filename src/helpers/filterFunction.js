export const searchFilter = (filterParams, resources) => {
  let filteredArr = resources.filter((item) => {
    const formatMatch =
      !filterParams.format ||
      item.EXTRA3.toLowerCase() === filterParams.format.toLowerCase();
    const distMatch =
      !filterParams.dist ||
      item.EXTRA2.toLowerCase() === filterParams.dist.toLowerCase();
    const industryMatch =
      !filterParams.industry ||
      item.EXTRA1.toLowerCase() === filterParams.industry.toLowerCase();
   
      const topicsMatch =
        !filterParams.topics || !item.MAPPING_IDS ||
        filterParams.topics.every((filter) => 
        item.MAPPING_IDS.some((tag) => tag.NAME === filter)
      );
      const checkID = item.MAPPING_IDS ? true : false;
      return formatMatch & distMatch & industryMatch & topicsMatch & checkID;
  })

  return filteredArr.sort((a, b) => {
    return new Date(a.POST_DATE_FORMAT).getTime()/ 1000 < new Date(b.POST_DATE_FORMAT).getTime()/ 1000 ? 1 : -1;
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
    return new Date(a.POST_DATE_FORMAT).getTime()/ 1000 < new Date(b.POST_DATE_FORMAT).getTime()/ 1000 ? 1 : -1;
  });;
};

export const filterTrending = (filterParams, resources) => {
  let filteredArr = resources.filter((item) => {
    const formatMatch =
      !filterParams.format ||
      item.EXTRA3.toLowerCase() === filterParams.format.toLowerCase();
   
      const topicsMatch =
        !filterParams.topics || !item.MAPPING_IDS ||
        filterParams.topics.every((filter) => 
        item.MAPPING_IDS.some((tag) => tag.NAME === filter)
      );
      const checkID = item.MAPPING_IDS ? true : false;
      return formatMatch & topicsMatch & checkID;
  })

  return filteredArr.sort((a, b) => {
    return new Date(a.POST_DATE_FORMAT).getTime()/ 1000 < new Date(b.POST_DATE_FORMAT).getTime()/ 1000 ? 1 : -1;
  });
};
