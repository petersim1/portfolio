"use server";

interface GithubI {
  success: boolean;
  stars: number;
  forks: number;
}

export const github = (): Promise<GithubI> => {
  return fetch("https://api.github.com/repos/petersim1/portfolio")
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

export const getMetadata = (url: string): Promise<string | null> => {
  return new Promise((resolve) => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.text();
        }
        resolve(null);
      })
      .then((result) => {
        resolve(result);
      });
  });
};
