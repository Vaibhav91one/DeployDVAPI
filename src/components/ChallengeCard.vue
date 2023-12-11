<template>
    <div style="border-radius: 5px;">
        <v-card class="mx-auto" max-width="500"
            :style="{ backgroundColor: this.isInputMatching == null ? 'white' : (this.isInputMatching ? 'green' : 'red') }">
            <v-img :src=imageURL height="200px" cover></v-img>

            <v-card-title>
                {{ title }}
            </v-card-title>

            <v-card-subtitle>
                <span :style="{ color: Level === 'Easy' ? 'green' : (Level === 'Moderate' ? 'yellow' : 'red') }"> {{ Level
                }}
                </span>

            </v-card-subtitle>

            <v-card-actions>
                <v-btn variant="text" style="background-color: black; color: white; padding: 10px; margin: 10px;">
                    <v-row justify="center">
                        <v-dialog v-model="dialog" width="540">
                            <template v-slot:activator="{ props }">
                                <v-btn color="white" v-bind="props">
                                    Try
                                </v-btn>
                            </template>
                            <v-card>
                                <v-card-title
                                    style="justify-content: center; display: flex; margin-top: 20px; padding: 10px;">
                                    <span class="text-h5">{{ title }}</span>
                                </v-card-title>
                                <v-card-text>
                                    <v-container>
                                        <v-row>
                                            <v-card-text style="margin: 10px; padding: 10px;">
                                                {{ description }}
                                            </v-card-text>
                                            <v-col cols="12">
                                                <v-text-field v-model="userInput" label="{Flag}" :style="{ color: this.isInputMatching == null ? 'black' : (this.isInputMatching ? 'green' : 'red') }" 
                                                    hint="Make sure you have gotten the right one!"></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                </v-card-text>
                                <v-card-actions style="margin: 10px; padding: 10px;">
                                    <v-btn color="primary">
                                        Hint

                                        <v-dialog v-model="dialogHint" activator="parent" width="auto">
                                            <v-card>
                                                <v-card-text>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                    tempor incididunt ut labore et dolore magna aliqua.
                                                </v-card-text>
                                            </v-card>
                                        </v-dialog>
                                    </v-btn>
                                    <v-spacer></v-spacer>
                                    <v-btn color="white" variant="text" @click=SubmitFlag()
                                        style="background-color: black;">
                                        Submit
                                    </v-btn>
                                    <v-spacer></v-spacer>
                                    <v-btn color="red">
                                        Write Up

                                        <v-dialog v-model="dialogWriteUp" activator="parent" width="auto">
                                            <v-card>
                                                <v-card-text>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                    tempor incididunt ut labore et dolore magna aliqua.
                                                </v-card-text>
                                                <!-- <v-card-actions>
                                                <v-btn color="primary" block @click="dialogWriteUp = false">Close Dialog</v-btn>
                                            </v-card-actions> -->
                                            </v-card>
                                        </v-dialog>
                                    </v-btn>


                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-row>
                </v-btn>

                <v-spacer></v-spacer>

                <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
            </v-card-actions>

            <v-expand-transition>
                <div v-show="show">
                    <v-divider></v-divider>

                    <v-card-text>
                        {{ description }}
                    </v-card-text>
                </div>
            </v-expand-transition>
        </v-card>

    </div>
</template>
<script>
export default {
    props: ['title', 'description', 'Level', 'imageURL', 'number'],
    data: () => ({
        show: false,
        dialog: false,
        dialogHint: false,
        dialogWriteUp: false,
        isInputMatching: null,
    }),
    methods: {
        SubmitFlag() {
            const input = this.userInput;
            const envVariableName = `VITE_ENV_VARIABLE_${this.number}`;
            const envVariables = [import.meta.env[envVariableName]];

            this.isInputMatching = (envVariables == input)
            if(this.isInputMatching){
                this.dialog = false
            }
        }
    }
}


</script>