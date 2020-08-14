import axiosClient from './client';

export interface SOQuestion {
  owner: {
    display_name: string;
  };
  title: string;
  creation_date: number;
  link: string;
  question_id: number;
}

export interface SOQuestionResponse {
  items: SOQuestion[];
  hasMore: boolean;
}

class QuestionsApi {
  baseUrl: string;
  constructor() {
    this.baseUrl = 'questions?';
  }
  getQuestions(page: string, sort: string) {
    return axiosClient
      .get(
        `${this.baseUrl}page=${page}&order=desc&sort=${sort}&site=stackoverflow`
      )
      .then((res) => {
        const { items, has_more } = res.data;
        return { items, hasMore: has_more };
      })
      .catch(() => {
        throw new Error('API:Something went wrong');
      });
  }
}

export default QuestionsApi;
