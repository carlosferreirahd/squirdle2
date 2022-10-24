import { SimpleTag } from "@components";
import { useNavigate } from "react-router-dom";

export function Filters() {

  const navigate = useNavigate();

  return (
    <div className="text-foreground text-center flex flex-col gap-4">
      <h1 className="font-extrabold text-3xl">
        squirdle2 filters
      </h1>
      <p>
        You can use attribute filters to better search for Pokémon on squirdle2!
      </p>
      <section className="px-4">
        <h2 className="font-extrabold text-2xl">
          Syntax
        </h2>
        <div className="flex flex-col items-center justify-center">
          <ul>
            <li>
              <SimpleTag text="attr:X" /> Show only Pokémon with <SimpleTag text="attr" size="small" /> exactly equal to <SimpleTag text="X" size="small" />
            </li>
            <li>
              <SimpleTag text="attr!X" /> Show only Pokémon with <SimpleTag text="attr" size="small" /> of any value BUT <SimpleTag text="X" size="small" />
            </li>
            <li>
              <SimpleTag text="attr>X" /> Show only Pokémon with <SimpleTag text="attr" size="small" /> higher than <SimpleTag text="X" size="small" />
            </li>
            <li>
              <SimpleTag text="attr<X" /> Show only Pokémon with <SimpleTag text="attr" size="small" /> lower than <SimpleTag text="X" size="small" />
            </li>
          </ul>
        </div>
      </section>
      <section className="px-4">
        <h2 className="font-extrabold text-2xl">
          Attributes
        </h2>
        <p className="mt-4">
          The following attribute filters are available for use:
        </p>
        <div className="flex flex-col text-left items-center justify-center mt-4">
          <table>
            <tbody>
              <tr>
                <th>Attribute</th>
                <th>Description</th>
              </tr>
              <tr>
                <th><SimpleTag text="gen" size="small" /></th>
                <th>The generation of the pokemon</th>
              </tr>
              <tr>
                <th><SimpleTag text="type1" size="small" /></th>
                <th>The primary type of the pokemon</th>
              </tr>
              <tr>
                <th><SimpleTag text="type2" size="small" /></th>
                <th>The secundary type of the pokemon</th>
              </tr>
              <tr>
                <th><SimpleTag text="type" size="small" /></th>
                <th>Either the primary or secundary type of the pokemon</th>
              </tr>
              <tr>
                <th><SimpleTag text="height" size="small" /></th>
                <th>The height of the pokemon</th>
              </tr>
              <tr>
                <th><SimpleTag text="weight" size="small" /></th>
                <th>The weight of the pokemon</th>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="px-4">
        <h2 className="font-extrabold text-2xl">
          Examples
        </h2>
        <div className="mt-4 flex items-center flex-col">
          <p className="mb-1 max-w-sm">
            Show only Pokémon from generation 4:
          </p>
          <div>
            <input className="h-14 w-80 border border-solid border-[#DCDCDC] rounded p-4 text-xl outline-none bg-[#ffffff] text-[#000000]" disabled value="gen:4" />
          </div>
        </div>
        <div className="mt-4 flex items-center flex-col">
          <p className="mb-1 max-w-sm">
            Show Pokémon <strong>NOT</strong> from generation 4 with type1 of fire:
          </p>
          <div>
            <input className="h-14 w-80 border border-solid border-[#DCDCDC] rounded p-4 text-xl outline-none bg-[#ffffff] text-[#000000]" disabled value="gen!4 type1:fire" />
          </div>
        </div>
        <div className="mt-4 flex items-center flex-col">
          <p className="mb-1 max-w-sm">
            Show Pokémon from generation 4 with type1 of fire and height less than 0.9:
          </p>
          <div>
            <input className="h-14 w-80 border border-solid border-[#DCDCDC] rounded p-4 text-xl outline-none bg-[#ffffff] text-[#000000]" disabled value="gen:4 type1:fire height<0.9" />
          </div>
        </div>
        <div className="mt-4 flex items-center flex-col">
          <p className="mb-1 max-w-sm">
            Show Pokémon from generation 4 with height between 0.7 and 0.9:
          </p>
          <div>
            <input className="h-14 w-80 border border-solid border-[#DCDCDC] rounded p-4 text-xl outline-none bg-[#ffffff] text-[#000000]" disabled value="gen:4 height>0.7 height<0.9" />
          </div>
        </div>
      </section>
      <section>
        <div className="my-8">
          <button className="border rounded-lg p-2" onClick={() => navigate(-1)}>
            <i className="fa fa-arrow-left pr-2" aria-hidden="true" />
            Go Back
          </button>
        </div>
      </section>
    </div>
  );
}
