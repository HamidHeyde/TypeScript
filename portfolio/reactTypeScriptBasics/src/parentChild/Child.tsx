export type tChildData = {
  color: string
}

const Child = ({color}: tChildData) => <div> {color}: from children </div>

export default Child