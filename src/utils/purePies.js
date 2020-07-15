export default repos => {
    const languages = {};
    repos.map((repo) => {
        if(languages[repo.language]){
            languages[repo.language]++;
        }
        else{
            languages[repo.language] = 1;
        }
    })

    let langObject = [];

    for (const key in languages) {
        langObject = [...langObject, { name: key, y: languages[key]}];
    }


    return langObject;
}