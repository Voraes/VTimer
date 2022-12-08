import { HistoryContainer, HistoryList, Status } from './styles';

export function History() {
  return (
    <HistoryContainer>
      <h1>History</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Project</th>
              <th>Duration</th>
              <th>Start</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Project</td>
              <td>20 minutes</td>
              <td>2 months ago</td>
              <td>
                <Status statusColor='green'>Finished</Status>
              </td>
            </tr>
            <tr>
              <td>Project</td>
              <td>20 minutes</td>
              <td>2 months ago</td>
              <td>
                <Status statusColor='green'>Finished</Status>
              </td>
            </tr>
            <tr>
              <td>Project</td>
              <td>20 minutes</td>
              <td>2 months ago</td>
              <td>
                <Status statusColor='green'>Finished</Status>
              </td>
            </tr>
            <tr>
              <td>Project</td>
              <td>20 minutes</td>
              <td>2 months ago</td>
              <td>
                <Status statusColor='yellow'>On going</Status>
              </td>
            </tr>
            <tr>
              <td>Project</td>
              <td>20 minutes</td>
              <td>2 months ago</td>
              <td>
                <Status statusColor='red'>Stopped</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}
