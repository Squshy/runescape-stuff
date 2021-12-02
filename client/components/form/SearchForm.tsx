import { Formik, Form } from "formik";
import React from "react";
import { searchForItemText } from "../../util/searchForItemText";
import { FormLabelInput } from "./FormLabelInput";

interface SearchFormProps {}

export const SearchForm: React.FC<SearchFormProps> = ({}) => {
  return (
    <Formik
      initialValues={{ item: "" }}
      onSubmit={async ({ item }, { setErrors }) => {
        if (item.length === 0)
          setErrors({ item: "You must enter an item name" });
        else {
          const url = searchForItemText(item);
          console.log(url);
          fetch(url)
            .then((res) => res.json())
            .then((data) => console.log(data));
        }
      }}
    >
      <Form className="flex flex-col justify-center shadow-md rounded-md p-10 bg-[#292929]">
        <div className="w-full flex flex-col gap-3">
          <FormLabelInput
            name="item"
            placeholder="Willow longbow (u)"
            label="Search For Item"
          />
          <button
            type="submit"
            className="transition duration-75 ease-out w-full rounded-md bg-blue-800 p-2 hover:bg-blue-700 font-semibold"
          >
            Search
          </button>
        </div>
      </Form>
    </Formik>
  );
};
