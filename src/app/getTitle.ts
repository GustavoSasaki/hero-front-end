import { SITE_TITLE } from "./variables";

export function getTitle(page:string){
    return `${page} - ${SITE_TITLE}`
}