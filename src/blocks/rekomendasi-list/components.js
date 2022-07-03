import { useState, useEffect } from "react";
import { Card, ButtonAddStep } from "./_components";
// import { Card, ButtonAddStep } from "./_components";
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

let rekom_interface = {
  title: "",
  price: 0,
  priceTag: "Rp",
  subtitle: "",
  description: ``,
  imageurl: "",
  imagealt: "",
  imageid: "",
  olshops: [],
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
  }, []);

  let listsDummy = [
    {
      title: "Poco F3",
      price: 4000000,
      priceTag: "Rp",
      subtitle: "Smartphone Mid-end Killer terbaik saat ini",
      description: `HP gaming harga 4 Jutaan terbaik pertama ada Poco X3 GT, HP ini rilis pada bulan Agustus 2021. Dengan spesifikasi layar IPS LCD, refresh rate 120Hz, ukuran layar 6,6 inci, resolusi Full HD+ (1080 x 2400 piksel), HDR10 dan kecerahan layar 450 nits (minimum). Serta jenis perlindungan Corning Gorilla Glass Victus.<br>Performanya menggunakan jenis Chipset MediaTek Dimensity 1100 5G dengan kapasitas RAM 8GB dan memori internal 128/256GB. Menjalankan sistem operasi berbasis Android 11, MIUI 12.5 for POCO. Punya kapasitas baterai 5.000 mAh yang mendukung Fast Charging 67W (100% dalam 42 menit).`,
      imageurl:
        "https://fdn.gsmarena.com/imgroot/reviews/21/poco-f3/lifestyle/-1200w5/gsmarena_024.jpg",
      imagealt: "Poco F3",
      imageid: "1",
      olshops: [
        { name: "Tokopedia", slug: "tokopedia", url: "#" },
        { name: "Shopee", slug: "shopee", url: "#" },
        { name: "Lazada", slug: "lazada", url: "#" },
        { name: "Bukalapak", slug: "bukalapak", url: "#" },
      ],
    },
    { ...rekom_interface },
  ];
  const [listsState, setLists] = useState(lists);
  // const [listsState, setLists] = useState(listsDummy);
  useEffect(() => {
    setAttributes({ lists: listsState });
  }, [listsState]);

  return (
    <>
      <InspectorPanel {...props} />

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
        label="Tambah Rekomendasi List"
        onClick={() => {
          setLists([
            ...listsState,
            {
              ...rekom_interface,
            },
          ]);
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
