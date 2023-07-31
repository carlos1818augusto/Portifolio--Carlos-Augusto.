
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/carlos1818augusto/Portifolio--Carlos-Augusto./main/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}