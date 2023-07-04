import { CardProperty } from "./CardProperty"
export const CardPropertyList = () => {
  return (
    <>
      <main>
        <div className="text-center">
          <h2 className="text-3xl font-bold p-4 border-b-2 inline-block border-gold uppercase">Featured Properties</h2>

        </div>
        <section className="max-w-7xl mx-auto py-7">
          <div className="flex justify-center flex-wrap gap-6">
            <CardProperty />
            <CardProperty />
            <CardProperty />
            <CardProperty />
            <CardProperty />
            <CardProperty />
          </div>
        </section>
      </main>
    </>
  )
}
