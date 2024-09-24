import Card from "../card/Card";
import "./list.scss";
// import { listData } from "../../lib/dummyData";
const List = ({ posts }) => {
  return (
    <div className="list">
      {posts.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};
export default List;
