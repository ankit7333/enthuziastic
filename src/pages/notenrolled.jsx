import YourCourse from '../component/Yourcourse'
import Session from '../component/Session'
import Batch from '../component/Batch'
import Curriculum from '../component/Curriculum'
import Pricerate from '../component/Pricerate'
function NotEnrolled() {
  return (
    <>
      <YourCourse />
      <Session />
      <div className={`flex justify-between`}>
        <Batch />
        <Curriculum />
      </div>
      <Pricerate />
    </>
  );
}

export default NotEnrolled;
