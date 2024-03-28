# Pembroke's Compendium

Welcome to Pembroke's Compendium, a Node.js dictionary application that empowers you to explore English words, their definitions, and translations into seven different languages. This README file will guide you through setting up and using the application effectively.

## Features

- **Comprehensive Definitions**: Get detailed meanings and contextual examples for English words.
- **Multilingual Support**: Translate words into seven languages for enhanced communication.
- **API Integration**: Utilizes APIs to ensure accurate and up-to-date information for every search.
- **User-Friendly Interface**: Clean and intuitive design suitable for users of all levels.
- **Customization Options**: Personalize your experience with language settings and favorite word lists.

## Getting Started

Follow these steps to set up and run Pembroke's Compendium on your local machine:

### Prerequisites

Make sure you have the following installed:

- Node.js (version >= 12.0.0)
- npm (Node Package Manager)

### Installation

1. Clone the repository to your local machine:
   ```bash
   gh repo clone guduudow/PembrokesCompendium
   ```
2. Navigate to the project directory:
   ```bash
   cd PembrokesCompendium
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Configuration

1. Obtain API keys for the following services:
   - Google Translate API for language translation

2. Create a `.env` file in the root directory of the project and add your credentials:
   ```plaintext
   
   CREDENTIALS="[paste your downloaded JSON file here]"
   ```

### Usage

1. Start the application:
   ```bash
   npm run dev
   ```
2. Open your web browser and navigate to `http://localhost:7999` to access Pembroke's Compendium.
3. Enter an English word in the search bar to get its definition and translations.



## Contact

If you have any questions or suggestions regarding Pembroke's Compendium, feel free to contact me.

Happy exploring with Pembroke's Compendium! 📘🌍
