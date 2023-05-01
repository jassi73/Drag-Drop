import "@atlaskit/css-reset";

import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

import NewOne from "./Components/newOne";
// import Column from "./Components/Column";
// import Product from "./Components/Product";
import initialData from "./Components/data-table";
import useFetch from "./Hooks/useFetch";

const App = () => {
  const { data, loading, error } = useFetch(
    " https://stageapibc.monkcommerce.app/admin/shop/product?search=F&page=1"
  );

  const state = initialData;
  const onDragEnd = (params) => {
    const srcI = params.source.index;
    const desI = params.destination.index;

    console.log(params);
    state.splice(desI, 0, state.splice(srcI, 1)[0]);
  };

  return (
    <DragDropContext key={1} onDragEnd={onDragEnd}>
      <div className="main">
        <h4>Products</h4>
        <Droppable droppableId="droppable-1">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {data &&
                data.map((item, i) => (
                  <Draggable
                    key={item?.id}
                    draggableId={`draggable-${item?.id}`}
                    index={i}
                  >
                    {(provided) => (
                      <div ref={provided.innerRef} {...provided.draggableProps}>
                        <NewOne item={item} provided={provided} />
                      </div>
                    )}
                  </Draggable>
                ))}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

export default App;
