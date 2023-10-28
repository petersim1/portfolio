"use server";

type GithubI = {
  success: boolean;
  stars: number;
  forks: number;
};

export const github = (): Promise<GithubI> => {
  return fetch("https://api.github.com/repos/petersim1/petersim1.github.io")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Fetch");
    })
    .then((result) => {
      const { stargazers_count: stars, forks_count: forks } = result;
      return {
        success: true,
        stars,
        forks,
      };
    })
    .catch((error) => {
      console.log(error);
      return {
        success: false,
        stars: 0,
        forks: 0,
      };
    });
};
