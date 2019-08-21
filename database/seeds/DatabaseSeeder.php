<?php

use App\Models\Product;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => "admin",
            'email' => 'admin@admin.com',
            'password' => bcrypt('password'),
        ]);

        Artisan::call('voyager:admin admin@admin.com');
        $this->call(VoyagerDatabaseSeeder::class);

        $faker = Faker\Factory::create('fr_FR');

        for ($i = 0; $i < 100; $i++) {
            $product = new Product;
            $product->name = $faker->word;
            $product->description = $faker->text(200);
            $product->price = $faker->randomFloat(2, 1, 150);
            $product->photo = $i.".jpg";
            $product->stock = $faker->randomDigitNotNull;
            $product->save();
        }

    }
}
