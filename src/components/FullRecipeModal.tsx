import {
    Dialog,
    TransitionChild,
    Transition,
    DialogPanel,
    DialogTitle,
} from "@headlessui/react";
import { Fragment } from "react";
import { useAppStore } from "../stores/useAppStore";
import { FullRecipe } from "../types";

export default function FullRecipeModal() {
    const {
        modal,
        closeModal,
        fullRecipe,
        handleClickFavorite,
        favoriteExists,
    } = useAppStore();

    const renderIngredients = () => {
        const ingredients: JSX.Element[] = [];

        for (let i = 1; i <= 10; i++) {
            const ingredient =
                fullRecipe[`strIngredient${i}` as keyof FullRecipe];
            const measure = fullRecipe[`strMeasure${i}` as keyof FullRecipe];

            if (ingredient && measure) {
                ingredients.push(
                    <li key={i} className="text-lg font-normal">
                        {ingredient} - {measure}
                    </li>
                );
            }
        }

        return ingredients;
    };

    return (
        <>
            <Transition appear show={modal} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <TransitionChild
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-70" />
                    </TransitionChild>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <TransitionChild
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all max-w-[600px]">
                                    <figure>
                                        <img
                                            src={fullRecipe.strDrinkThumb}
                                            alt={`${fullRecipe.strDrink} picture`}
                                            className="mx-auto w-96"
                                        />
                                    </figure>
                                    <DialogTitle
                                        as="h3"
                                        className="text-gray-900 text-4xl font-extrabold my-5 text-center"
                                    >
                                        {fullRecipe.strDrink}
                                    </DialogTitle>
                                    <DialogTitle
                                        as="h3"
                                        className="text-gray-900 text-2xl font-extrabold my-5"
                                    >
                                        Ingredients & Measures
                                    </DialogTitle>
                                    {renderIngredients()}
                                    <DialogTitle
                                        as="h3"
                                        className="text-gray-900 text-2xl font-extrabold my-5"
                                    >
                                        Instructions
                                    </DialogTitle>

                                    <p className="text-lg">
                                        {fullRecipe.strInstructions}
                                    </p>

                                    <div className="mt-5 flex justify-between gap-4">
                                        <button
                                            className="btn flex-1 bg-gray-600 font-bold uppercase text-white hover:bg-gray-500"
                                            onClick={closeModal}
                                        >
                                            close
                                        </button>

                                        <button
                                            className="btn flex-1 bg-orange-800 font-bold uppercase text-white  hover:bg-orange-900"
                                            onClick={() =>
                                                handleClickFavorite(fullRecipe)
                                            }
                                        >
                                            {favoriteExists(fullRecipe.idDrink)
                                                ? "Remove from favorite"
                                                : "Add to Favorites"}
                                        </button>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
