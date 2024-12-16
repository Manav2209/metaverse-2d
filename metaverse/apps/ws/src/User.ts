import { parse } from "path"
import { JWT_PASSWORD } from "./config";
import { JwtPayload } from "jsonwebtoken";
import client from "@repo/db"


export class User{

    constructor(private ws : WebSocket){

    }

    initHandlers(){
        this.ws.on("message" ,async(data)=>{ 
            const parsedData = JSON.parse(data.toString())
            console.log(parsedData)
            
            switch(parsedData.type){
                case "join":
                    const spaceId = parsedData.payload.spaceId;
                    const token = parsedData.payload.token;
                    const userId = (jwt.verify(token , JWT_PASSWORD) as JwtPayload).userId

                    if(!userId){
                        this.ws.close()
                    }
                    this.userId = userId
                    const space = await clientInformation.registerProtocolHandler.findFirst 

                    break
            }

        })
    }
}