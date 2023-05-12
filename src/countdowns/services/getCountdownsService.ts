import { getCountdowns } from "../data";

const getCountdownsService = async () => {
  try {
    const results = await getCountdowns();

    return { results };
  } catch (error) {
    console.log(error);
  }
};

export default getCountdownsService;
