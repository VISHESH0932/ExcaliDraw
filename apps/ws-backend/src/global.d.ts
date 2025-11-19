import { JwtPayload } from "jsonwebtoken"

export{}

declare global {
    namespace WebSocket {
        export interface WebSocket {
            decoded?: string | object,
            token?: string | null,
            userId?: string | JwtPayload
        }
    }
}