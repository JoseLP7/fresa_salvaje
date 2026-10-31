import { useState } from "react";

function Perfil(props) {

    const [modo, setModo] = useState("login");
    const itemsPerfil = {
        tituloPerfil: "🍓 Mi perfil"
    }

    return (
        <section className="min-h-screen bg-pink-50 px-6 py-24">

            <div className="mx-auto max-w-md">

                {/* Título */}

                <div className="mb-8 text-center">

                    <h1 className="text-4xl font-bold text-pink-600">
                        {itemsPerfil.tituloPerfil}
                    </h1>

                    <p className="mt-2 text-gray-600">
                        {modo === "login"
                            ? "Inicia sesión en Fresa Salvaje"
                            : "Crea tu cuenta en Fresa Salvaje"}
                    </p>

                </div>


                {/* Tarjeta */}

                <div className="rounded-2xl bg-white p-8 shadow-lg">

                    {/* Botones para cambiar formulario */}

                    <div className="mb-8 flex rounded-lg bg-pink-50 p-1">

                        <button
                            onClick={() => setModo("login")}
                            className={`w-1/2 rounded-md py-2 font-semibold transition ${modo === "login"
                                ? "bg-pink-500 text-white"
                                : "text-pink-600 hover:bg-pink-100"
                                }`}
                        >
                            Iniciar sesión
                        </button>

                        <button
                            onClick={() => setModo("registro")}
                            className={`w-1/2 rounded-md py-2 font-semibold transition ${modo === "registro"
                                ? "bg-pink-500 text-white"
                                : "text-pink-600 hover:bg-pink-100"
                                }`}
                        >
                            Crear cuenta
                        </button>

                    </div>


                    {/* FORMULARIO LOGIN */}

                    {modo === "login" && (

                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="space-y-5"
                        >

                            <div>

                                <label className="mb-2 block font-medium text-gray-700">
                                    Correo electrónico
                                </label>

                                <input
                                    type="email"
                                    placeholder="correo@ejemplo.com"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-200"
                                />

                            </div>


                            <div>

                                <label className="mb-2 block font-medium text-gray-700">
                                    Contraseña
                                </label>

                                <input
                                    type="password"
                                    placeholder="********"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-200"
                                />

                            </div>


                            <button
                                type="submit"
                                className="w-full rounded-lg bg-pink-500 py-3 font-semibold text-white transition hover:bg-pink-600"
                            >
                                Iniciar sesión
                            </button>

                        </form>

                    )}


                    {/* FORMULARIO REGISTRO */}

                    {modo === "registro" && (

                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="space-y-5"
                        >

                            <div>

                                <label className="mb-2 block font-medium text-gray-700">
                                    Nombre completo
                                </label>

                                <input
                                    type="text"
                                    placeholder="Tu nombre"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-200"
                                />

                            </div>


                            <div>

                                <label className="mb-2 block font-medium text-gray-700">
                                    Nombre de usuario
                                </label>

                                <input
                                    type="text"
                                    placeholder="@tuusuario"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-200"
                                />

                            </div>


                            <div>

                                <label className="mb-2 block font-medium text-gray-700">
                                    Correo electrónico
                                </label>

                                <input
                                    type="email"
                                    placeholder="correo@ejemplo.com"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-200"
                                />

                            </div>


                            <div>

                                <label className="mb-2 block font-medium text-gray-700">
                                    Contraseña
                                </label>

                                <input
                                    type="password"
                                    placeholder="********"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-200"
                                />

                            </div>


                            <div>

                                <label className="mb-2 block font-medium text-gray-700">
                                    Confirmar contraseña
                                </label>

                                <input
                                    type="password"
                                    placeholder="********"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-200"
                                />

                            </div>


                            <button
                                type="submit"
                                className="w-full rounded-lg bg-pink-500 py-3 font-semibold text-white transition hover:bg-pink-600"
                            >
                                Crear cuenta
                            </button>

                        </form>

                    )}

                </div>

            </div>

        </section>
    );
}

export default Perfil;