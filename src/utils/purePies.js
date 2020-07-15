export default repos => {
    const languages = [];
    repos.forEach(repo => {
        if(languages[repo.language]){
            languages[repo.language]++;
        }
        else{
            languages[repo.language] = 1;
        }
    })
    return languages;
}