import { RecoilRoot, useRecoilValue } from 'recoil'; // Add both imports here
import { networkAtom, jobsCountAtom, messagesCountAtom, notificationsCountAtom } from './atoms';
import './App.css';

function App() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsCount = useRecoilValue(jobsCountAtom);
  const messagesCount = useRecoilValue(messagesCountAtom);
  const notificationsCount = useRecoilValue(notificationsCountAtom);

  return (
    <RecoilRoot>
      <div>
        <button>Home</button>

        <button>
          My network ({networkNotificationCount >= 100 ? "99" : networkNotificationCount})
        </button>

        <button>
          Jobs ({jobsCount})
        </button>

        <button>
          Messages ({messagesCount})
        </button>

        <button>
          Notification ({notificationsCount})
        </button>

        <button>Me</button>
      </div>
    </RecoilRoot>
  );
}

export default App;
