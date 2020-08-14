import React, { useEffect, useState } from 'react';
import Table from '../components/Table';
import QuestionsApi, {
  SOQuestion,
  SOQuestionResponse
} from '../api/questionsApi';

const questionsApi = new QuestionsApi();

const Home = () => {
  const [tableData, setTableData] = useState<SOQuestion[]>([]);
  //   const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasMorePages, setHasMorePages] = useState<boolean>(true);
  const [lastLoadedPage, setLastLoadedPage] = useState<number>(1);

  const handleLoadRows = async (): Promise<void> => {
    if (hasMorePages) {
      //   setIsLoading(true);

      const {
        items,
        hasMore
      }: SOQuestionResponse = await questionsApi.getQuestions(
        lastLoadedPage.toString(),
        'activity'
      );
      setLastLoadedPage(lastLoadedPage + 1);
      //   setIsLoading(false);
      setTableData([...tableData, ...items]);
      setHasMorePages(hasMore);
    }
  };
  useEffect(() => {
    // setIsLoading(true);

    questionsApi
      .getQuestions(lastLoadedPage.toString(), 'activity')
      .then(({ items, hasMore }) => {
        setLastLoadedPage(lastLoadedPage + 1);
        // setIsLoading(false);
        setTableData([...tableData, ...items]);
        setHasMorePages(hasMore);
      });
  }, []);

  return (
    <main>
      <Table data={tableData} onNearTableEnd={handleLoadRows} />
    </main>
  );
};

export default Home;
