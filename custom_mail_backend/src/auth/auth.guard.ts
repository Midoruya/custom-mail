import {CanActivate, ExecutionContext, Injectable, UnauthorizedException} from "@nestjs/common";
import {JwtService} from "@nestjs/jwt";
import {Observable} from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private jwtService: JwtService
    ) {
    }

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        try {
            const authHeader = request.headers.authorization;
            console.log(authHeader)
            const authHeaderParts = authHeader.split(' ');
            const bearer = authHeaderParts[0];
            const token = authHeaderParts[1];

            if (bearer !== 'Bearer' || !token)
                throw new UnauthorizedException("You are not authorized");

            request.user = this.jwtService.verify(token);
            return true;
        }
        catch (e) {
            console.log(e);
            throw new UnauthorizedException("You are not authorized");
        }
    }
}