const url = "onevnine-f6fdfxejd4gdezdg.westus-01.azurewebsites.net";

export const GetAllChampions = async () => {
    const res = await fetch(url + "/Champion/GetAllChamions", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    if(!res.ok){
        const errorData = await res.json();
        const message = errorData.message
        console.log(message);
        return []
    }
    const data = await res.json();
    return data;
}

export const GetChampionByRole = async (role: string) => {
    const res = await fetch(url + "/Champion/GetChampionsByRole" + role, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    if(!res.ok){
        const errorData = await res.json();
        const message = errorData.message
        console.log(message);
        return []
    }
    const data = await res.json();
    return data;
}