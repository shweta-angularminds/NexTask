

class LocalStorageService{
    private TOKEN_KEY = "nexTask_token"

    setToken(token:string){
        localStorage.setItem(this.TOKEN_KEY,token)

    }

    getToken():string|null{
        return localStorage.getItem(this.TOKEN_KEY)
    }

    removeToken(){
        localStorage.removeItem(this.TOKEN_KEY)
    }

    clear(){
        localStorage.clear()
    }
}

export default new LocalStorageService()

