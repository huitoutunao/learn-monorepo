export function hello(to: string = 'world') {
  const txt = `hello ${to}!`
  console.log(txt)
  return txt
}
