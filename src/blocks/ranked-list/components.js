import { useState, useEffect } from "react";
import { Card, ButtonAddStep } from "./_components";
import dummyDatas from "./data";
const { __ } = wp.i18n; // Import __() from wp.i18n

const { RichText, MediaUpload, InspectorControls } =
  wp.blockEditor || wp.editor;

const { ToggleControl, PanelBody, RadioControl, RangeControl, SelectControl } =
  wp.components;

const moveElement = (array, from, to) => {
  const copy = [...array];
  const valueToMove = copy.splice(from, 1)[0];
  copy.splice(to, 0, valueToMove);
  return copy;
};

let list_interface = {
  title: "",
  description: "",
  imageurl: "",
  imagealt: "",
  imageid: "",
  likes: [],
  dislikes: [],
};

export function EditorComponent(props) {
  let {
    attributes: { blockID, lists },
    setAttributes,
    block,
    getBlock,
    getClientIdsWithDescendants,
    isSelected,
  } = props;

  const [listsState, setLists] = useState(lists);

  useEffect(() => {
    if (
      blockID === "" ||
      getClientIdsWithDescendants().some(
        (ID) =>
          "blockID" in getBlock(ID).attributes &&
          getBlock(ID).attributes.blockID === blockID
      )
    ) {
      setAttributes({ blockID: block.clientId });
    }
    if (listsState.length == 0) setLists([{ ...list_interface }]);
  }, []);

  useEffect(() => {
    setAttributes({ lists: listsState });
  }, [listsState]);

  return (
    <>
      <InspectorPanel {...props} />
      {window.location.host == "dafudablock.test" ? (
        <button
          onClick={() => {
            lists = dummyDatas;
            setLists(dummyDatas);
          }}
        >
          Reset Data
        </button>
      ) : (
        ""
      )}

      <ol className="ranked-list p-0" id={`ranked-list-${blockID}`}>
        {listsState.map((list, index) => (
          <Card
            data={list}
            index={index}
            key={index}
            {...props}
            editList={(newList) => {
              listsState[index] = Object.assign(listsState[index], newList);
              setLists([...listsState]);
            }}
            deleteList={() => {
              setLists([
                ...listsState.slice(0, index),
                ...listsState.slice(index + 1, listsState.length),
              ]);
            }}
            moveUp={() => {
              if (index > 0) {
                setLists([...moveElement(listsState, index, index - 1)]);
              }
            }}
            moveDown={() => {
              if (index < listsState.length - 1) {
                setLists([...moveElement(listsState, index, index + 1)]);
              }
            }}
          />
        ))}
      </ol>
      <ButtonAddStep
        label="Tambah list"
        onClick={() => {
          setLists([...listsState, list_interface]);
        }}
      />
    </>
  );
}

function InspectorPanel(props) {
  return (
    <InspectorControls>
      <PanelBody title={__("Ranked List Settings")}></PanelBody>
    </InspectorControls>
  );
}
