export const QUESTION_ANSWER = 'QUESTION_ANSWER';
export const SUBMIT = 'SUBMIT';
export const INIT_QUESTIONS = 'INIT_QUESTIONS';
export const CHANGE_QUESTION= 'CHANGE_QUESTION';
export const RESET = 'RESET';
export const DOWNLOAD = 'DOWNLOAD';
export const TIMER= "TIMER";


export function questionAnswer(index, answer) {
    return { 
        type: QUESTION_ANSWER, 
        payload: { index, answer } };
}

export function changeQuestion(index,change) {
    return {
        type: CHANGE_QUESTION,
        payload: {
            index,change
        }
    };
}

export function submit(questions){
    return {
        type: SUBMIT,
        payload: {
            questions
        }
    } 
}

export function initQuestions(questions) {
    return {
        type: INIT_QUESTIONS,
        payload: {
            questions
        }
    };
}

export function reset() {
    return {
        type: RESET
    };
}


export function download(questions){
    return {
        type: DOWNLOAD,
        payload: {
            questions
        }
    };
}


export function timer(time) {
	return { type: TIMER, payload: {time}};
}