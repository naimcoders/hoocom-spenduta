import { URI_BACKEND } from "./index-api";

const adminAPI = `${URI_BACKEND}/api/admin`;

export const uriRegisterEmployee = `${URI_BACKEND}/api/auth/register-employee`; // post (register)
export const uriLoginEmployee = `${URI_BACKEND}/api/auth/login-employee`; // post (login)

export const uriClassName = `${adminAPI}/classname`; // get and post
export const uriLessons = `${adminAPI}/lessons`; // get and post
export const uriGetLessonTeacher = `${adminAPI}/lesson/teachers`; // get / post (:lesson) / delete (:id)
export const uriGeneralData = `${adminAPI}/general-settings`; // get = this | patch = :id
export const uriEmployees = `${adminAPI}/employees`; // get = this | delete = :role/:userId
