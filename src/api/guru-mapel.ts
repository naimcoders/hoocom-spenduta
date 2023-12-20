import { URI_BACKEND } from "./index-api";

const guruMapel = `${URI_BACKEND}/api/guru-mapel`;

export const uriTeacherLessonByClass = `${guruMapel}/teacher-lesson-class`; // get (:teacherId)
export const uriTeacherLessonByLesson = `${guruMapel}/teacher-lesson-lesson`; // get (:teacherId)
export const uriPresences = `${guruMapel}/presence`; // get (/:classnameId/:lessonId) post (/create)
export const uriAssessment = `${guruMapel}/assessment`; // get (/bobot/:id/:classname/:lesson) get (/current_score/:studentId/:lesson/:type) patch (:boboId)
