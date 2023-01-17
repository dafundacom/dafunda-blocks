export default function Icon({ name }) {
  const path = `/icons/${name}.svg`;
  const url = dbe.build_url + path;
  return <img src={url} />;
}
